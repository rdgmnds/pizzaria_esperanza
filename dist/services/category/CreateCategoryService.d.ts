interface CategoryRequest {
    name: string;
}
declare class CreateCategoryService {
    execute({ name }: CategoryRequest): Promise<{
        name: string;
    }>;
}
export { CreateCategoryService };
//# sourceMappingURL=CreateCategoryService.d.ts.map