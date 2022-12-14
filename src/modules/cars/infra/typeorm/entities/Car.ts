import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    daily_rate: number;
    @Column()
    available: boolean = true;
    @Column()
    license_plate: string;
    @Column()
    fine_amount: number;
    @Column()
    brand: string;
    @JoinColumn({ name: "category_id" })
    @ManyToOne(() => Category)
    category: Category;
    @Column()
    category_id: string;
    @ManyToMany(() => Specification, { eager: true })
    @JoinTable({
        name: "specifications_cars",
        joinColumns: [{name: "car_id"}],
        inverseJoinColumns: [{name: "specification_id"}]
    })
    specifications: Specification[];
    @CreateDateColumn()
    created_at: Date;
    

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Car }