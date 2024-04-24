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
import type { TagResponse } from './TagResponse';
import {
    TagResponseFromJSON,
    TagResponseFromJSONTyped,
    TagResponseToJSON,
} from './TagResponse';
import type { UserResponse } from './UserResponse';
import {
    UserResponseFromJSON,
    UserResponseFromJSONTyped,
    UserResponseToJSON,
} from './UserResponse';

/**
 * 
 * @export
 * @interface PostDetailedResponse
 */
export interface PostDetailedResponse {
    /**
     * 
     * @type {string}
     * @memberof PostDetailedResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PostDetailedResponse
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof PostDetailedResponse
     */
    summary?: string;
    /**
     * 
     * @type {UserResponse}
     * @memberof PostDetailedResponse
     */
    author?: UserResponse;
    /**
     * 
     * @type {string}
     * @memberof PostDetailedResponse
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PostDetailedResponse
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof PostDetailedResponse
     */
    coverUrl?: string;
    /**
     * 
     * @type {Array<TagResponse>}
     * @memberof PostDetailedResponse
     */
    tags?: Array<TagResponse>;
    /**
     * 
     * @type {number}
     * @memberof PostDetailedResponse
     */
    rating?: number;
    /**
     * 
     * @type {number}
     * @memberof PostDetailedResponse
     */
    views?: number;
    /**
     * 
     * @type {Date}
     * @memberof PostDetailedResponse
     */
    createdAtUtc?: Date;
}

/**
 * Check if a given object implements the PostDetailedResponse interface.
 */
export function instanceOfPostDetailedResponse(value: object): boolean {
    return true;
}

export function PostDetailedResponseFromJSON(json: any): PostDetailedResponse {
    return PostDetailedResponseFromJSONTyped(json, false);
}

export function PostDetailedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostDetailedResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'author': json['author'] == null ? undefined : UserResponseFromJSON(json['author']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'body': json['body'] == null ? undefined : json['body'],
        'coverUrl': json['coverUrl'] == null ? undefined : json['coverUrl'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagResponseFromJSON)),
        'rating': json['rating'] == null ? undefined : json['rating'],
        'views': json['views'] == null ? undefined : json['views'],
        'createdAtUtc': json['createdAtUtc'] == null ? undefined : (new Date(json['createdAtUtc'])),
    };
}

export function PostDetailedResponseToJSON(value?: PostDetailedResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'summary': value['summary'],
        'author': UserResponseToJSON(value['author']),
        'slug': value['slug'],
        'body': value['body'],
        'coverUrl': value['coverUrl'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagResponseToJSON)),
        'rating': value['rating'],
        'views': value['views'],
        'createdAtUtc': value['createdAtUtc'] == null ? undefined : ((value['createdAtUtc']).toISOString()),
    };
}

