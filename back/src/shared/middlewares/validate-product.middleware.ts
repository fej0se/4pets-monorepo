import { HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';
import { YUP_MESSAGE } from '../constants/messages';

@Injectable()
export class ProductValidationMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const schema = Yup.object({
        name: Yup.string().required(YUP_MESSAGE),
        description: Yup.string().required(YUP_MESSAGE),
        sizes: Yup.array().of(Yup.string().min(1)).min(1).required(YUP_MESSAGE),
        categoryId: Yup.number().required(YUP_MESSAGE),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      const errors = {};

      error.inner.map((e) => (errors[e.path] = [e.message]));
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        data: { message: { ...errors } },
      });
    }
  }
}
