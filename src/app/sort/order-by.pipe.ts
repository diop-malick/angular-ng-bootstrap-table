/*
 Copyright 2013-2019 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { Pipe, PipeTransform } from '@angular/core';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Pipe({ name: 'orderBy' })
export class JhiOrderByPipe implements PipeTransform {
    transform(values: any[], predicate = '', reverse = false): any {
        if (predicate === '') {
            return reverse ? values.sort().reverse() : values.sort();
        }
        return values.sort((a, b) => {
            const e1 = this.getNested(a, predicate);
            const e2 = this.getNested(b, predicate);
            if (e1 < e2) {
                return reverse ? 1 : -1;
            } else if (e2 < e1) {
                return reverse ? -1 : 1;
            }
            return 0;
        });
    }

    /**
     * @see http://blog.nicohaemhouts.com/2015/08/03/accessing-nested-javascript-objects-with-string-key/
     * @param theObject
     * @param path
     * @param separator
     */
    getNested (theObject, path, separator = '.') {
        try {
            return path
                .replace('[', separator).replace(']','')
                .split(separator)
                .reduce((obj, property) => {
                        return obj[property];
                    }, theObject
                );
        } catch (err) {
            return undefined;
        }
    }
}

// TODO : call pipe on component
