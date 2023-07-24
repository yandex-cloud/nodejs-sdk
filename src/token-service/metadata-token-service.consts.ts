/*

Issuance of tokens shall be in accordance with the following rules

When accessing APIs of other Cloud services (including the database), services should follow the standard rules of
working with tokens recommended by the documentation:

- a token is issued in the way most appropriate for this service: for example, it can be a metadata service for SVM, Token Agent
  for iron hosts or JWT for services hosted outside the Cloud perimeter

- the application does not start (does not start accepting requests) until its system SA token has been successfully issued;
  the application does not start if the token issued at the moment of start is valid for less than 15 minutes;

- the token issued at start time is used for a time equal to at least 10% of the difference between expires_at and the time the token was issued;

- a token that has been used within the time specified in the previous paragraph is subject to update: the application starts
  a background process that reissues the token of its system SA, while all current requests continue to be made with the
  cached token (thus, in case of any problems with token reissue, 90% of the token's lifetime will be left to notice and
  correct the situation);

- it is recommended that applications have a system SA token usage time monitor, which should be lit if the token lifetime
  approaches 20% of the difference between expires_at and the token's expiration time.

*/

export const MAX_ATTEMPTS_NUMBER_TO_GET_TOKEN_IN_INITIALIZE = 5;

export const TOKEN_MINIMUM_LIFETIME_MARGIN_MS = 15 * 60 * 1000;

export const TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT = 90;
