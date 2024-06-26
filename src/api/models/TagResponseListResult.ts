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
 * @interface TagResponseListResult
 */
export interface TagResponseListResult {
    /**
     * 
     * @type {boolean}
     * @memberof TagResponseListResult
     */
    readonly isSuccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TagResponseListResult
     */
    readonly isFailure?: boolean;
    /**
     * 
     * @type {Error}
     * @memberof TagResponseListResult
     */
    error?: Error;
    /**
     * 
     * @type {Array<TagResponse>}
     * @memberof TagResponseListResult
     */
    readonly value?: Array<TagResponse>;
}

/**
 * Check if a given object implements the TagResponseListResult interface.
 */
export function instanceOfTagResponseListResult(value: object): boolean {
    return true;
}

export function TagResponseListResultFromJSON(json: any): TagResponseListResult {
    return TagResponseListResultFromJSONTyped(json, false);
}

export function TagResponseListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagResponseListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'isSuccess': json['isSuccess'] == null ? undefined : json['isSuccess'],
        'isFailure': json['isFailure'] == null ? undefined : json['isFailure'],
        'error': json['error'] == null ? undefined : json['error'],
        'value': json['value'] == null ? undefined : ((json['value'] as Array<any>).map(TagResponseFromJSON)),
    };
}

export function TagResponseListResultToJSON(value?: Omit<TagResponseListResult, 'isSuccess'|'isFailure'|'value'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
    };
}

