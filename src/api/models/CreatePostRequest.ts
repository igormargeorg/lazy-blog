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

/**
 * 
 * @export
 * @interface CreatePostRequest
 */
export interface CreatePostRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    userId?: string;
    /**
     * 
     * @type {Array<TagResponse>}
     * @memberof CreatePostRequest
     */
    tags?: Array<TagResponse>;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    coverUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePostRequest
     */
    isPublished?: boolean;
}

/**
 * Check if a given object implements the CreatePostRequest interface.
 */
export function instanceOfCreatePostRequest(value: object): boolean {
    return true;
}

export function CreatePostRequestFromJSON(json: any): CreatePostRequest {
    return CreatePostRequestFromJSONTyped(json, false);
}

export function CreatePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'body': json['body'] == null ? undefined : json['body'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagResponseFromJSON)),
        'coverUrl': json['coverUrl'] == null ? undefined : json['coverUrl'],
        'isPublished': json['isPublished'] == null ? undefined : json['isPublished'],
    };
}

export function CreatePostRequestToJSON(value?: CreatePostRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'summary': value['summary'],
        'body': value['body'],
        'userId': value['userId'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagResponseToJSON)),
        'coverUrl': value['coverUrl'],
        'isPublished': value['isPublished'],
    };
}

