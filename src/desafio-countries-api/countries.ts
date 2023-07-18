import axios from "axios";
import { Country } from "../mocks/countries.type";

/*
 ____                   __ _          ___  _
|  _ \  ___  ___  __ _ / _(_) ___    / _ \/ |
| | | |/ _ \/ __|/ _` | |_| |/ _ \  | | | | |
| |_| |  __/\__ \ (_| |  _| | (_) | | |_| | |
|____/ \___||___/\__,_|_| |_|\___/   \___/|_|
 */
export const sort = (list: any[], key: any): any => list;

/*
 ____                   __ _          ___ ____
|  _ \  ___  ___  __ _ / _(_) ___    / _ \___ \
| | | |/ _ \/ __|/ _` | |_| |/ _ \  | | | |__) |
| |_| |  __/\__ \ (_| |  _| | (_) | | |_| / __/
|____/ \___||___/\__,_|_| |_|\___/   \___/_____|
 */

// Use o endpoint: https://restcountries.com/v3.1/all
export const getCountries = (): any => {};

/*
 ____                   __ _          ___ _____
|  _ \  ___  ___  __ _ / _(_) ___    / _ \___ /
| | | |/ _ \/ __|/ _` | |_| |/ _ \  | | | ||_ \
| |_| |  __/\__ \ (_| |  _| | (_) | | |_| |__) |
|____/ \___||___/\__,_|_| |_|\___/   \___/____/
 */

type Response<T> = {
  items: T[];
  nextPage: number;
  page: number;
  pageSize: number;
  previousPage: number;
  totalItems: number;
};

export const countriesService = (qs: Record<string, any>): any => {};
