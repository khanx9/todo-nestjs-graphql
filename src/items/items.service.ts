import { Injectable } from '@nestjs/common';
// import { ResolveField, ResolveProperty } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemInput } from './inputs/item.input';
import { Item } from './items.interface';


@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private itemModel: Model<Item>) { }
    async create(createItemDto: ItemInput): Promise<Item> {
        console.log({...createItemDto,createdDate : Date.now(), changedDate: Date.now()});
        const createdItem = new this.itemModel({...createItemDto,createdDate : Date.now(), changedDate: Date.now()});
        return await createdItem.save();
    }
    async findAll(): Promise<Item[]> {
        return await this.itemModel.find().exec();
    }
    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    async findByListFields(listId: string[]): Promise<Item[]> {
        return await this.itemModel.find({
            _id: { $in: listId }
        }).exec();
    }
    async delete(id: string): Promise<Item> {

        return await this.itemModel.findByIdAndRemove(id);
    }
    async update(id: string, item: ItemInput): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, {...item,changedDate : Date.now()}, { new: true });
    }
}