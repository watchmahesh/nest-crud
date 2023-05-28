/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { isNil, isEmpty, map } from 'lodash';

import { RequestQuery } from '../interface/request-response.interface';

@Injectable()
export class QueryUtils {
	async getQueryParams(query: RequestQuery): Promise<any> {
		return {
			order: JSON.stringify(await this.getOrder(query.orderBy)),
			offset: await this.getOffset(query.page, query.limit),
			page: await this.getPage(query.page),
			limit: await this.getLimit(query.limit),
			keyword: query.keyword? query.keyword.trim(): null,
			status: query.status? query.status.trim(): null,
		};
	}

	async getPage(page: any): Promise<number> {
		let result = 1;
		if (!(page)) {
			return result;
		}
		if (!isNil(page)) {
			result = parseInt(page, 10);
		}
		if (result < 1) {
			result = 1;
		}
		return result;
	}

	async getLimit(limit: any): Promise<number> {
		let result = 25;
		if (!(limit)) {
			return result;
		}
		if (!isNil(limit)) {
			result = parseInt(limit, 10);
		}
		if (result < 1) {
			result = 1;
		}
		return result;
	}

	async getOffset(page: any, limit: any): Promise<number> {
		const tmpPage = await this.getPage(page);
		const tmpLimit = await this.getLimit(limit);
		return (tmpPage - 1) * tmpLimit;
	}

	async getOrder(orderBy: string): Promise<object> {
		let result: object = {};
		if (!isEmpty(orderBy)) {
			const attributes: Array<string> = orderBy.split(',');
			map(attributes, (attribute) => {
				const key = attribute.trim()
				if (attribute.trim().charAt(0) === '-') {
					result = {...result, [key.substring(1)] :'DESC'};
				}else{
					result = {...result, [key] :'ASC'};
				}
			});
		}
		return result;
	}
}
