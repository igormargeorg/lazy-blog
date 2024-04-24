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
import type { PublishedPostResponse } from './PublishedPostResponse';
import {
    PublishedPostResponseFromJSON,
    PublishedPostResponseFromJSONTyped,
    PublishedPostResponseToJSON,
} from './PublishedPostResponse';

/**
 * 
 * @export
 * @interface PublishedPostResponseListResult
 */
export interface PublishedPostResponseListResult {
    /**
     * 
     * @type {boolean}
     * @memberof PublishedPostResponseListResult
     */
    readonly isSuccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PublishedPostResponseListResult
     */
    readonly isFailure?: boolean;
    /**
     * 
     * @type {Error}
     * @memberof PublishedPostResponseListResult
     */
    error?: Error;
    /**
     * 
     * @type {Array<PublishedPostResponse>}
     * @memberof PublishedPostResponseListResult
     */
    readonly value?: Array<PublishedPostResponse>;
}

/**
 * Check if a given object implements the PublishedPostResponseListResult interface.
 */
export function instanceOfPublishedPostResponseListResult(value: object): boolean {
    return true;
}

export function PublishedPostResponseListResultFromJSON(json: any): PublishedPostResponseListResult {
    return PublishedPostResponseListResultFromJSONTyped(json, false);
}

export function PublishedPostResponseListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedPostResponseListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'isSuccess': json['isSuccess'] == null ? undefined : json['isSuccess'],
        'isFailure': json['isFailure'] == null ? undefined : json['isFailure'],
        'error': json['error'] == null ? undefined : json['error'],
        'value': json['value'] == null ? undefined : ((json['value'] as Array<any>).map(PublishedPostResponseFromJSON)),
    };
}

export function PublishedPostResponseListResultToJSON(value?: Omit<PublishedPostResponseListResult, 'isSuccess'|'isFailure'|'value'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
    };
}

