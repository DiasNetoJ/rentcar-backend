import { Request, Response } from 'express';
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
        const category: Category = await createCategoryUseCase.execute({ name, description });
        return response.status(201).send(category);
    }
}

export { CreateCategoryController };
