interface AuthRequest {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: AuthRequest): Promise<{
        id: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
//# sourceMappingURL=AuthUserService.d.ts.map