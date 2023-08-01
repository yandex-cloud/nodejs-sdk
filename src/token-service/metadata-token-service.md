# class MetadataTokenService

## General rules of getting a token from Iam service

Issuance of tokens shall be in accordance with the following rules

When accessing APIs of other Cloud services (including the database), services should follow the standard rules of
working with tokens recommended by the documentation:

- A token is issued in the way most appropriate for this service: for example, it can be a metadata service for SVM, Token Agent
  for iron hosts or JWT for services hosted outside the Cloud perimeter

- The application does not start (does not start accepting requests) until its system SA token has been successfully issued;
  the application does not start if the token issued at the moment of start is valid for less than 15 minutes;

- The token issued at start time is used for a time equal to at least 10% of the difference between expires_at and the time
  the token was issued;

- A token that has been used within the time specified in the previous paragraph is subject to update: the application starts
  a background process that reissues the token of its system SA, while all current requests continue to be made with the
  cached token (thus, in case of any problems with token reissue, 90% of the token's lifetime will be left to notice and
  correct the situation);

- It is recommended that applications have a system SA token usage time monitor, which should be lit if the token lifetime
  approaches 20% of the difference between expires_at and the token's expiration time.

## MetadataTokenService.getToken() implementation details

No matter how many parallel getToken() calls are made, there will always be only one request to the Iam service at a time.

If there is a valid previously received token, then it is returned.

The request for a new token will be executed after a period depending on the TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT constant.

In case of an error, the repeated request will be executed after a period depending on the constants GET_TOKEN_BACKOFF_..... 
and a random number.

If a token update is not received for a long time, warnings are started to be logged when time to expire is less then TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT.  Error are logged not more often than ERROR_REPORT_INTERVAL_MS.

The token returned by getToken() must have at least TOKEN_MINIMUM_LIFETIME_MARGIN_MS before it expires.

If there is no old valid token and a new one cannot be obtained, an error is thrown.

For mandatory token retrieval several attempts can be made with intervals counted taking into account INITIALIZE_BACKOFF_.... constants and a random number. No more than INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN attempts are made in this case.

## Logging

By default, errors and the message that errors are completed are written to console.log().  But you can catch them by
implementing custom logging.



