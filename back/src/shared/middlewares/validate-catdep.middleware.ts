import { HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Categories } from '../../store/models/categories.model';
import { Departments } from '../../store/models/departments.model';
import * as Yup from 'yup';
import { HAS_CATEGORY, YUP_MESSAGE } from '../constants/messages';

@Injectable()
export class CatDepValidationMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const schema = Yup.object({
        name: Yup.string().required(YUP_MESSAGE),
      });

      await schema.validate(req.body, { abortEarly: false });

      if (req.originalUrl.includes('category')) {
        const hasCategory = await Categories.findOne({
          where: {
            name: req.body.name,
          },
        });
        if (hasCategory) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            success: false,
            data: {
              message: HAS_CATEGORY,
            },
          });
        }
      } else {
        const hasDepartment = await Departments.findOne({
          where: {
            name: req.body.name,
          },
        });
        if (hasDepartment) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            success: false,
            data: {
              message: HAS_CATEGORY,
            },
          });
        }
      }

      return next();
    } catch (error) {
      const errors = {};

      error.inner.map((e) => (errors[e.path] = [e.message]));
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        data: {
          message: { ...errors },
        },
      });
    }
  }
}
