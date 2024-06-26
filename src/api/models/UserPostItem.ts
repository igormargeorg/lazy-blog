/* tslint:disable */
/* eslint-disable */
/**
 * LazyBlog API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { VoteDirection } from './VoteDirection';
import {
    VoteDirectionFromJSON,
    VoteDirectionFromJSONTyped,
    VoteDirectionToJSON,
} from './VoteDirection';

/**
 * 
 * @export
 * @interface UserPostItem
 */
export interface UserPostItem {
    /**
     * 
     * @type {string}
     * @memberof UserPostItem
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPostItem
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPostItem
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPostItem
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof UserPostItem
     */
    views?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPostItem
     */
    comments?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPostItem
     */
    rating?: number;
    /**
     * 
     * @type {VoteDirection}
     * @memberof UserPostItem
     */
    voteDirection?: VoteDirection;
    /**
     * 
     * @type {string}
     * @memberof UserPostItem
     */
    coverUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserPostItem
     */
    isPublished?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UserPostItem
     */
    createdAtUtc?: Date;
}

/**
 * Check if a given object implements the UserPostItem interface.
 */
export function instanceOfUserPostItem(value: object): boolean {
    return true;
}

export function UserPostItemFromJSON(json: any): UserPostItem {
    return UserPostItemFromJSONTyped(json, false);
}

export function UserPostItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPostItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'views': json['views'] == null ? undefined : json['views'],
        'comments': json['comments'] == null ? undefined : json['comments'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'voteDirection': json['voteDirection'] == null ? undefined : VoteDirectionFromJSON(json['voteDirection']),
        'coverUrl': json['coverUrl'] == null ? undefined : json['coverUrl'],
        'isPublished': json['isPublished'] == null ? undefined : json['isPublished'],
        'createdAtUtc': json['createdAtUtc'] == null ? undefined : (new Date(json['createdAtUtc'])),
    };
}

export function UserPostItemToJSON(value?: UserPostItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'summary': value['summary'],
        'slug': value['slug'],
        'views': value['views'],
        'comments': value['comments'],
        'rating': value['rating'],
        'voteDirection': VoteDirectionToJSON(value['voteDirection']),
        'coverUrl': value['coverUrl'],
        'isPublished': value['isPublished'],
        'createdAtUtc': value['createdAtUtc'] == null ? undefined : ((value['createdAtUtc']).toISOString()),
    };
}

