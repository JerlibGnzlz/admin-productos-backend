import { Table, Model, DataType, Default, Column } from "sequelize-typescript"

@Table({
    tableName: "products"
})


class Product extends Model {
    @Column({
        type: DataType.STRING(20)
    })
    name: string

    @Column({
        type: DataType.FLOAT(10, 2)
    })
    price: number


    @Column({
        type: DataType.BOOLEAN
    })
    active: boolean
}

export default Product