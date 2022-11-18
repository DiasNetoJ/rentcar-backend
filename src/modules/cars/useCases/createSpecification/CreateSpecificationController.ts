import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
        const { name, description } = request.body;
        const specification = await createSpecificationUseCase.execute({ name, description });    
        return response.status(201).send(specification);
    }
}

export { CreateSpecificationController }