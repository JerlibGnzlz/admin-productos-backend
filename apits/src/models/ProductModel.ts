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
        type: DataType.FLOAT
    })
    price: number

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    active: boolean
}

export default Product