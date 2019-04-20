import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { environment } from '../environments/environment';
import { HttpRequestService } from './http-request.service';
describe('HttpRequestService', function () {
    var backendUrl = environment.backendUrl;
    var withCredentials = environment.withCredentials;
    var spyHttpClient;
    var service;
    beforeEach(function () {
        spyHttpClient = {
            get: jest.fn(),
            post: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
        };
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: spyHttpClient },
            ],
        });
        service = TestBed.get(HttpRequestService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should build empty HttpParams from empty object', function () {
        var httpParams = service.buildParams({});
        expect(httpParams.keys().length).toBe(0);
    });
    it('should build proper HttpParams from key-value mapping', function () {
        var httpParams = service.buildParams({
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
        });
        expect(httpParams.keys().length).toBe(3);
        expect(httpParams.get('key1')).toBe('value1');
        expect(httpParams.get('key2')).toBe('value2');
        expect(httpParams.get('key3')).toBe('value3');
    });
    it('should execute GET', function () {
        service.get('/url');
        expect(spyHttpClient.get).toHaveBeenCalledWith(backendUrl + "/webapi/url", {
            withCredentials: withCredentials,
            params: expect.any(Object), responseType: 'json',
        });
    });
    it('should execute POST with null body and empty params by default', function () {
        service.post('/url');
        expect(spyHttpClient.post).toHaveBeenCalledWith(backendUrl + "/webapi/url", null, {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute POST with params if specified', function () {
        service.post('/url', { key: 'value' });
        expect(spyHttpClient.post).toHaveBeenCalledWith(backendUrl + "/webapi/url", null, {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute POST with body if specified', function () {
        service.post('/url', {}, 'body');
        expect(spyHttpClient.post).toHaveBeenCalledWith(backendUrl + "/webapi/url", 'body', {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute PUT with null body and empty params by default', function () {
        service.put('/url');
        expect(spyHttpClient.put).toHaveBeenCalledWith(backendUrl + "/webapi/url", null, {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute PUT with params if specified', function () {
        service.put('/url', { key: 'value' });
        expect(spyHttpClient.put).toHaveBeenCalledWith(backendUrl + "/webapi/url", null, {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute PUT with body if specified', function () {
        service.put('/url', {}, 'body');
        expect(spyHttpClient.put).toHaveBeenCalledWith(backendUrl + "/webapi/url", 'body', {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute DELETE', function () {
        service.delete('/url');
        expect(spyHttpClient.delete).toHaveBeenCalledWith(backendUrl + "/webapi/url", {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
    it('should execute DELETE with params', function () {
        service.delete('/url', { key: 'value' });
        expect(spyHttpClient.delete).toHaveBeenCalledWith(backendUrl + "/webapi/url", {
            withCredentials: withCredentials,
            headers: expect.any(Object),
            params: expect.any(Object),
        });
    });
});
//# sourceMappingURL=http-request.service.spec.js.map