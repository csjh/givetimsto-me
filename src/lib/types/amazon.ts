export interface Amazon {
    AuthenticationResult: AuthenticationResult;
    ChallengeParameters: Record<string, never>;
}

interface AuthenticationResult {
    AccessToken: string;
    ExpiresIn: number;
    IdToken: string; // bearer token, expires in minutes
    RefreshToken: string; // not present on RespondToAuthChallenge, encoded body
    TokenType: string;
}
