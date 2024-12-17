import { DeepPartial, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../config";

class CrudService<T extends ObjectLiteral> {
  private repo: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repo = AppDataSource.getRepository(entity);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repo.create(data);
    return await this.repo.save(entity);
  }

  async update(id: number, data: DeepPartial<T>): Promise<T | null> {
    await this.repo.update(id, data as T);
    return this.repo.findOneBy({ id } as any);
  }

  async get(id: number): Promise<T | null> {
    return this.repo.findOneBy({ id } as any);
  }
  async getByKey(
    key: string,
    value: string | number | boolean
  ): Promise<T | null> {
    return this.repo.findOneBy({ [key]: value } as any);
  }
}

export default CrudService;
