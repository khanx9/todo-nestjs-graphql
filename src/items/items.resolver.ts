/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Query, Mutation, Args, ResolveProperty, ResolveField, Parent, ID } from '@nestjs/graphql';
import { ItemType } from './dto/items.type';
import { ItemInput } from './inputs/item.input';
import { ItemsService } from './items.service';

@Resolver(() => ItemType)
export class ItemsResolver {
    constructor(
        private readonly itemsService: ItemsService,
    ) { }

    /**
     * Find all records
     */
    @Query(() => [ItemType])
    async items() {
        return await this.itemsService.findAll();
    }
    @Query(() => ItemType,{
        name : "itemById",
        description : "Pass item id and recceive record by that id"
    })
    async itemById(@Args('id') id: string) {
        return await this.itemsService.findOne(id);
    }
    @Mutation(() => ItemType)
    async createItem(@Args('input') input: ItemInput) {
        return await this.itemsService.create(input);
    }
    @Mutation(() => ItemType)
    async updateItem(@Args('id') id: string, @Args('input') input: ItemInput) {
        return await this.itemsService.update(id, input);
    }
    @Mutation(() => ItemType)
    async deleteItem(@Args('id') id: string) {
        return  await this.itemsService.delete(id);
    }
    @Query(() => String)
    async hello() {
        return 'hello';
    }
}