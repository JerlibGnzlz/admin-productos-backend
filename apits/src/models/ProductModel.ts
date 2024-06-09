import { Table, Model, DataType, Default, Column } from "sequelize-typescript"

@Table({
    tableName: "products"
})


class Product extends Model {
    @Column({
        type: DataType.STRING(20)
    })
    declare name: string

    @Column({
        type: DataType.FLOAT
    })
    declare price: number

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    declare active: boolean
}

export default Product