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
import type { UserPostResponse } from './UserPostResponse';
import {
    UserPostResponseFromJSON,
    UserPostResponseFromJSONTyped,
    UserPostResponseToJSON,
} from './UserPostResponse';

/**
 * 
 * @export
 * @interface UserPostResponseResult
 */
export interface UserPostResponseResult {
    /**
     * 
     * @type {boolean}
     * @memberof UserPostResponseResult
     */
    readonly isSuccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserPostResponseResult
     */
    readonly isFailure?: boolean;
    /**
     * 
     * @type {Error}
     * @memberof UserPostResponseResult
     */
    error?: Error;
    /**
     * 
     * @type {UserPostResponse}
     * @memberof UserPostResponseResult
     */
    value?: UserPostResponse;
}

/**
 * Check if a given object implements the UserPostResponseResult interface.
 */
export function instanceOfUserPostResponseResult(value: object): boolean {
    return true;
}

export function UserPostResponseResultFromJSON(json: any): UserPostResponseResult {
    return UserPostResponseResultFromJSONTyped(json, false);
}

export function UserPostResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPostResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'isSuccess': json['isSuccess'] == null ? undefined : json['isSuccess'],
        'isFailure': json['isFailure'] == null ? undefined : json['isFailure'],
        'error': json['error'] == null ? undefined : json['error'],
        'value': json['value'] == null ? undefined : UserPostResponseFromJSON(json['value']),
    };
}

export function UserPostResponseResultToJSON(value?: Omit<UserPostResponseResult, 'isSuccess'|'isFailure'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
        'value': UserPostResponseToJSON(value['value']),
    };
}

