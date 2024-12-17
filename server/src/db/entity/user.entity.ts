import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: "varchar" })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  is2FAEnabled: boolean;

  @Column({ nullable: true })
  twoFaSecret: string;
}
