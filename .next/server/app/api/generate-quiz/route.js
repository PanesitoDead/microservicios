/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate-quiz/route";
exports.ids = ["app/api/generate-quiz/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate-quiz/route.ts":
/*!****************************************!*\
  !*** ./app/api/generate-quiz/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENROUTER_API_KEY,\n    baseURL: 'https://openrouter.ai/api/v1'\n});\nasync function POST(request) {\n    try {\n        const { topic, questionCount, questionTypes } = await request.json();\n        const prompt = `Eres un experto profesor Comunicacion de educación secundaria.\n\nGenera un cuestionario sobre \"${topic}\" basándote en el currículo estándar de Comunicacion de educación secundaria.\n\nEspecificaciones del cuestionario:\n- Número de preguntas: ${questionCount}\n- Tipo de preguntas: ${questionTypes === 'mixed' ? 'mixto (opción múltiple, verdadero/falso y abiertas)' : questionTypes}\n\nEl cuestionario debe cubrir los conceptos fundamentales del tema según el currículo de CTA.\n\nPara cada pregunta incluye:\n1. La pregunta claramente formulada\n2. Si es opción múltiple: 4 opciones (a, b, c, d) con una correcta\n3. Si es verdadero/falso: la respuesta correcta\n4. Una explicación breve del concepto\n\nResponde en formato JSON con esta estructura:\n{\n  \"title\": \"Cuestionario: ${topic}\",\n  \"topic\": \"${topic}\",\n  \"questions\": [\n    {\n      \"type\": \"multiple|boolean|open\",\n      \"question\": \"texto de la pregunta\",\n      \"options\": [\"opción a\", \"opción b\", \"opción c\", \"opción d\"], // solo para multiple\n      \"correctAnswer\": \"respuesta correcta\",\n      \"explanation\": \"explicación del concepto\"\n    }\n  ]\n}`;\n        const completion = await openai.chat.completions.create({\n            model: 'mistralai/mistral-7b-instruct:free',\n            messages: [\n                {\n                    role: 'user',\n                    content: prompt\n                }\n            ],\n            temperature: 0.7\n        });\n        const text = completion.choices[0]?.message?.content || '';\n        const quiz = JSON.parse(text);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            quiz\n        });\n    } catch (error) {\n        console.error('Error generating quiz:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error al generar el cuestionario'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXF1aXovcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQzVCO0FBRTNCLE1BQU1FLFNBQVMsSUFBSUQsOENBQU1BLENBQUM7SUFDeEJFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCO0lBQ3RDQyxTQUFTO0FBQ1g7QUFFTyxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQUcsTUFBTUgsUUFBUUksSUFBSTtRQUVsRSxNQUFNQyxTQUFTLENBQUM7OzhCQUVVLEVBQUVKLE1BQU07Ozt1QkFHZixFQUFFQyxjQUFjO3FCQUNsQixFQUFFQyxrQkFBa0IsVUFBVSx3REFBd0RBLGNBQWM7Ozs7Ozs7Ozs7OzswQkFZL0YsRUFBRUYsTUFBTTtZQUN0QixFQUFFQSxNQUFNOzs7Ozs7Ozs7O0NBVW5CLENBQUM7UUFFRSxNQUFNSyxhQUFhLE1BQU1iLE9BQU9jLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDdERDLE9BQU87WUFDUEMsVUFBVTtnQkFDUjtvQkFDRUMsTUFBTTtvQkFDTkMsU0FBU1I7Z0JBQ1g7YUFDRDtZQUNEUyxhQUFhO1FBQ2Y7UUFFQSxNQUFNQyxPQUFPVCxXQUFXVSxPQUFPLENBQUMsRUFBRSxFQUFFQyxTQUFTSixXQUFXO1FBQ3hELE1BQU1LLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0w7UUFFeEIsT0FBT3hCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRWM7UUFBSztJQUNsQyxFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBTzlCLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO1lBQUVpQixPQUFPO1FBQW1DLEdBQzVDO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1jYWNpXFxEb2N1bWVudHNcXEdpdEh1YlxcY29sbGFib3JhXFxtaWNyb3NlcnZpY2lvc1xcYXBwXFxhcGlcXGdlbmVyYXRlLXF1aXpcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknXHJcblxyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5ST1VURVJfQVBJX0tFWSxcclxuICBiYXNlVVJMOiAnaHR0cHM6Ly9vcGVucm91dGVyLmFpL2FwaS92MScsXHJcbn0pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRvcGljLCBxdWVzdGlvbkNvdW50LCBxdWVzdGlvblR5cGVzIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG5cclxuICAgIGNvbnN0IHByb21wdCA9IGBFcmVzIHVuIGV4cGVydG8gcHJvZmVzb3IgQ29tdW5pY2FjaW9uIGRlIGVkdWNhY2nDs24gc2VjdW5kYXJpYS5cclxuXHJcbkdlbmVyYSB1biBjdWVzdGlvbmFyaW8gc29icmUgXCIke3RvcGljfVwiIGJhc8OhbmRvdGUgZW4gZWwgY3VycsOtY3VsbyBlc3TDoW5kYXIgZGUgQ29tdW5pY2FjaW9uIGRlIGVkdWNhY2nDs24gc2VjdW5kYXJpYS5cclxuXHJcbkVzcGVjaWZpY2FjaW9uZXMgZGVsIGN1ZXN0aW9uYXJpbzpcclxuLSBOw7ptZXJvIGRlIHByZWd1bnRhczogJHtxdWVzdGlvbkNvdW50fVxyXG4tIFRpcG8gZGUgcHJlZ3VudGFzOiAke3F1ZXN0aW9uVHlwZXMgPT09ICdtaXhlZCcgPyAnbWl4dG8gKG9wY2nDs24gbcO6bHRpcGxlLCB2ZXJkYWRlcm8vZmFsc28geSBhYmllcnRhcyknIDogcXVlc3Rpb25UeXBlc31cclxuXHJcbkVsIGN1ZXN0aW9uYXJpbyBkZWJlIGN1YnJpciBsb3MgY29uY2VwdG9zIGZ1bmRhbWVudGFsZXMgZGVsIHRlbWEgc2Vnw7puIGVsIGN1cnLDrWN1bG8gZGUgQ1RBLlxyXG5cclxuUGFyYSBjYWRhIHByZWd1bnRhIGluY2x1eWU6XHJcbjEuIExhIHByZWd1bnRhIGNsYXJhbWVudGUgZm9ybXVsYWRhXHJcbjIuIFNpIGVzIG9wY2nDs24gbcO6bHRpcGxlOiA0IG9wY2lvbmVzIChhLCBiLCBjLCBkKSBjb24gdW5hIGNvcnJlY3RhXHJcbjMuIFNpIGVzIHZlcmRhZGVyby9mYWxzbzogbGEgcmVzcHVlc3RhIGNvcnJlY3RhXHJcbjQuIFVuYSBleHBsaWNhY2nDs24gYnJldmUgZGVsIGNvbmNlcHRvXHJcblxyXG5SZXNwb25kZSBlbiBmb3JtYXRvIEpTT04gY29uIGVzdGEgZXN0cnVjdHVyYTpcclxue1xyXG4gIFwidGl0bGVcIjogXCJDdWVzdGlvbmFyaW86ICR7dG9waWN9XCIsXHJcbiAgXCJ0b3BpY1wiOiBcIiR7dG9waWN9XCIsXHJcbiAgXCJxdWVzdGlvbnNcIjogW1xyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJtdWx0aXBsZXxib29sZWFufG9wZW5cIixcclxuICAgICAgXCJxdWVzdGlvblwiOiBcInRleHRvIGRlIGxhIHByZWd1bnRhXCIsXHJcbiAgICAgIFwib3B0aW9uc1wiOiBbXCJvcGNpw7NuIGFcIiwgXCJvcGNpw7NuIGJcIiwgXCJvcGNpw7NuIGNcIiwgXCJvcGNpw7NuIGRcIl0sIC8vIHNvbG8gcGFyYSBtdWx0aXBsZVxyXG4gICAgICBcImNvcnJlY3RBbnN3ZXJcIjogXCJyZXNwdWVzdGEgY29ycmVjdGFcIixcclxuICAgICAgXCJleHBsYW5hdGlvblwiOiBcImV4cGxpY2FjacOzbiBkZWwgY29uY2VwdG9cIlxyXG4gICAgfVxyXG4gIF1cclxufWBcclxuXHJcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcclxuICAgICAgbW9kZWw6ICdtaXN0cmFsYWkvbWlzdHJhbC03Yi1pbnN0cnVjdDpmcmVlJyxcclxuICAgICAgbWVzc2FnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICByb2xlOiAndXNlcicsXHJcbiAgICAgICAgICBjb250ZW50OiBwcm9tcHRcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRleHQgPSBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgfHwgJydcclxuICAgIGNvbnN0IHF1aXogPSBKU09OLnBhcnNlKHRleHQpXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcXVpeiB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHF1aXo6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdFcnJvciBhbCBnZW5lcmFyIGVsIGN1ZXN0aW9uYXJpbycgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTlJPVVRFUl9BUElfS0VZIiwiYmFzZVVSTCIsIlBPU1QiLCJyZXF1ZXN0IiwidG9waWMiLCJxdWVzdGlvbkNvdW50IiwicXVlc3Rpb25UeXBlcyIsImpzb24iLCJwcm9tcHQiLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwidGVtcGVyYXR1cmUiLCJ0ZXh0IiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJxdWl6IiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-quiz/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mcaci_Documents_GitHub_collabora_microservicios_app_api_generate_quiz_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-quiz/route.ts */ \"(rsc)/./app/api/generate-quiz/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-quiz/route\",\n        pathname: \"/api/generate-quiz\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-quiz/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mcaci\\\\Documents\\\\GitHub\\\\collabora\\\\microservicios\\\\app\\\\api\\\\generate-quiz\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mcaci_Documents_GitHub_collabora_microservicios_app_api_generate_quiz_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS1xdWl6JTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZW5lcmF0ZS1xdWl6JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2VuZXJhdGUtcXVpeiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtY2FjaSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2NvbGxhYm9yYSU1Q21pY3Jvc2VydmljaW9zJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtY2FjaSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2NvbGxhYm9yYSU1Q21pY3Jvc2VydmljaW9zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNpRDtBQUM5SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbWNhY2lcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxjb2xsYWJvcmFcXFxcbWljcm9zZXJ2aWNpb3NcXFxcYXBwXFxcXGFwaVxcXFxnZW5lcmF0ZS1xdWl6XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZW5lcmF0ZS1xdWl6L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2VuZXJhdGUtcXVpelwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2VuZXJhdGUtcXVpei9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG1jYWNpXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcY29sbGFib3JhXFxcXG1pY3Jvc2VydmljaW9zXFxcXGFwcFxcXFxhcGlcXFxcZ2VuZXJhdGUtcXVpelxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/openai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();