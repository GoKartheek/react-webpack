import fetch from 'isomorphic-unfetch';
import {apiEndPoints} from '../../config/endpoints';

export async function fetchEmployees() {
    const response = await fetch(apiEndPoints.employees);
    const payload = await response.json()
    console.log(payload)
    return payload;
} 