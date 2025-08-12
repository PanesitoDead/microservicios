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
exports.id = "app/api/load-materials/route";
exports.ids = ["app/api/load-materials/route"];
exports.modules = {

/***/ "(rsc)/./app/api/load-materials/route.ts":
/*!*****************************************!*\
  !*** ./app/api/load-materials/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_material_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/material-loader */ \"(rsc)/./lib/material-loader.ts\");\n\n\nasync function GET() {\n    try {\n        const materials = (0,_lib_material_loader__WEBPACK_IMPORTED_MODULE_1__.loadMaterialFiles)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            materials,\n            count: materials.length,\n            topics: [\n                ...new Set(materials.map((m)=>m.topic))\n            ]\n        });\n    } catch (error) {\n        console.error('Error loading materials:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error al cargar los materiales'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvYWQtbWF0ZXJpYWxzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNlO0FBRWxELGVBQWVFO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxZQUFZRix1RUFBaUJBO1FBRW5DLE9BQU9ELHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFDdkJEO1lBQ0FFLE9BQU9GLFVBQVVHLE1BQU07WUFDdkJDLFFBQVE7bUJBQUksSUFBSUMsSUFBSUwsVUFBVU0sR0FBRyxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxLQUFLO2FBQUc7UUFDbkQ7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBT1oscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRVEsT0FBTztRQUFpQyxHQUMxQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtY2FjaVxcRG9jdW1lbnRzXFxHaXRIdWJcXGNvbGxhYm9yYVxcbWljcm9zZXJ2aWNpb3NcXGFwcFxcYXBpXFxsb2FkLW1hdGVyaWFsc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGxvYWRNYXRlcmlhbEZpbGVzIH0gZnJvbSAnQC9saWIvbWF0ZXJpYWwtbG9hZGVyJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gbG9hZE1hdGVyaWFsRmlsZXMoKVxyXG4gICAgXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgbWF0ZXJpYWxzLFxyXG4gICAgICBjb3VudDogbWF0ZXJpYWxzLmxlbmd0aCxcclxuICAgICAgdG9waWNzOiBbLi4ubmV3IFNldChtYXRlcmlhbHMubWFwKG0gPT4gbS50b3BpYykpXVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBtYXRlcmlhbHM6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdFcnJvciBhbCBjYXJnYXIgbG9zIG1hdGVyaWFsZXMnIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibG9hZE1hdGVyaWFsRmlsZXMiLCJHRVQiLCJtYXRlcmlhbHMiLCJqc29uIiwiY291bnQiLCJsZW5ndGgiLCJ0b3BpY3MiLCJTZXQiLCJtYXAiLCJtIiwidG9waWMiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/load-materials/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/material-loader.ts":
/*!********************************!*\
  !*** ./lib/material-loader.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllTopics: () => (/* binding */ getAllTopics),\n/* harmony export */   getTopicExists: () => (/* binding */ getTopicExists),\n/* harmony export */   loadMaterialFiles: () => (/* binding */ loadMaterialFiles)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Mapeo de archivos a temas (basado en tus archivos)\nconst fileTopicMapping = {\n    'BIOTECNOLOGIA  N°03.txt': 'Biotecnología',\n    'CAMPOS  DE APLICACIÓN  DEL MÉTODO CIENTÍFICO.txt': 'Campos de Aplicación del Método Científico',\n    'EL CONOCIMIENTO CIENTIFICO Y EMPIRICO N°04.txt': 'El Conocimiento Científico y Empírico',\n    'EL MÉTODO CIENTÍFICO- LA PENICILINA.txt': 'El Método Científico - La Penicilina',\n    'LA CIENCIA MÓDULO  N° 01.txt': 'La Ciencia',\n    'MATERIALES DE LABORATORIO PRIMER AÑO.txt': 'Materiales de Laboratorio',\n    'METODO CIENTIFICO   1°.txt': 'Método Científico',\n    'PERSONAJES DE CIENCIA   N°02.txt': 'Personajes de Ciencia'\n};\nfunction loadMaterialFiles() {\n    const materialsPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'cta-materials');\n    try {\n        // Verificar si existe el directorio\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(materialsPath)) {\n            console.log('Directorio de materiales no encontrado:', materialsPath);\n            return [];\n        }\n        const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(materialsPath);\n        const txtFiles = files.filter((file)=>file.endsWith('.txt'));\n        const materials = txtFiles.map((filename, index)=>{\n            const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(materialsPath, filename);\n            const hasContent = fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath);\n            // Obtener el tema basado en el nombre del archivo\n            const topic = fileTopicMapping[filename] || 'Tema General';\n            // Generar título limpio\n            const title = filename.replace('.txt', '').replace(/N°\\d+/g, '').replace(/\\s+/g, ' ').trim();\n            return {\n                id: `material-${index + 1}`,\n                title,\n                topic,\n                filename,\n                uploadDate: new Date().toISOString().split('T')[0],\n                hasContent\n            };\n        });\n        return materials;\n    } catch (error) {\n        console.error('Error loading material files:', error);\n        return [];\n    }\n}\nfunction getAllTopics() {\n    const materials = loadMaterialFiles();\n    return [\n        ...new Set(materials.map((m)=>m.topic))\n    ];\n}\n// Esta función ya no lee el contenido para ahorrar tokens\nfunction getTopicExists(topic) {\n    const materials = loadMaterialFiles();\n    return materials.some((m)=>m.topic === topic);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWF0ZXJpYWwtbG9hZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUI7QUFDSTtBQVd2QixxREFBcUQ7QUFDckQsTUFBTUUsbUJBQTJDO0lBQy9DLDJCQUEyQjtJQUMzQixvREFBb0Q7SUFDcEQsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQyxnQ0FBZ0M7SUFDaEMsNENBQTRDO0lBQzVDLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDdEM7QUFFTyxTQUFTQztJQUNkLE1BQU1DLGdCQUFnQkgsZ0RBQVMsQ0FBQ0ssUUFBUUMsR0FBRyxJQUFJLFFBQVE7SUFFdkQsSUFBSTtRQUNGLG9DQUFvQztRQUNwQyxJQUFJLENBQUNQLG9EQUFhLENBQUNJLGdCQUFnQjtZQUNqQ0ssUUFBUUMsR0FBRyxDQUFDLDJDQUEyQ047WUFDdkQsT0FBTyxFQUFFO1FBQ1g7UUFFQSxNQUFNTyxRQUFRWCxxREFBYyxDQUFDSTtRQUM3QixNQUFNUyxXQUFXRixNQUFNRyxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLFFBQVEsQ0FBQztRQUVwRCxNQUFNQyxZQUE0QkosU0FBU0ssR0FBRyxDQUFDLENBQUNDLFVBQVVDO1lBQ3hELE1BQU1DLFdBQVdwQixnREFBUyxDQUFDRyxlQUFlZTtZQUMxQyxNQUFNRyxhQUFhdEIsb0RBQWEsQ0FBQ3FCO1lBRWpDLGtEQUFrRDtZQUNsRCxNQUFNRSxRQUFRckIsZ0JBQWdCLENBQUNpQixTQUFTLElBQUk7WUFFNUMsd0JBQXdCO1lBQ3hCLE1BQU1LLFFBQVFMLFNBQ1hNLE9BQU8sQ0FBQyxRQUFRLElBQ2hCQSxPQUFPLENBQUMsVUFBVSxJQUNsQkEsT0FBTyxDQUFDLFFBQVEsS0FDaEJDLElBQUk7WUFFUCxPQUFPO2dCQUNMQyxJQUFJLENBQUMsU0FBUyxFQUFFUCxRQUFRLEdBQUc7Z0JBQzNCSTtnQkFDQUQ7Z0JBQ0FKO2dCQUNBUyxZQUFZLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsRFQ7WUFDRjtRQUNGO1FBRUEsT0FBT0w7SUFDVCxFQUFFLE9BQU9lLE9BQU87UUFDZHZCLFFBQVF1QixLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPLEVBQUU7SUFDWDtBQUNGO0FBRU8sU0FBU0M7SUFDZCxNQUFNaEIsWUFBWWQ7SUFDbEIsT0FBTztXQUFJLElBQUkrQixJQUFJakIsVUFBVUMsR0FBRyxDQUFDaUIsQ0FBQUEsSUFBS0EsRUFBRVosS0FBSztLQUFHO0FBQ2xEO0FBRUEsMERBQTBEO0FBQ25ELFNBQVNhLGVBQWViLEtBQWE7SUFDMUMsTUFBTU4sWUFBWWQ7SUFDbEIsT0FBT2MsVUFBVW9CLElBQUksQ0FBQ0YsQ0FBQUEsSUFBS0EsRUFBRVosS0FBSyxLQUFLQTtBQUN6QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtY2FjaVxcRG9jdW1lbnRzXFxHaXRIdWJcXGNvbGxhYm9yYVxcbWljcm9zZXJ2aWNpb3NcXGxpYlxcbWF0ZXJpYWwtbG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWF0ZXJpYWxGaWxlIHtcclxuICBpZDogc3RyaW5nXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHRvcGljOiBzdHJpbmdcclxuICBmaWxlbmFtZTogc3RyaW5nXHJcbiAgdXBsb2FkRGF0ZTogc3RyaW5nXHJcbiAgaGFzQ29udGVudDogYm9vbGVhblxyXG59XHJcblxyXG4vLyBNYXBlbyBkZSBhcmNoaXZvcyBhIHRlbWFzIChiYXNhZG8gZW4gdHVzIGFyY2hpdm9zKVxyXG5jb25zdCBmaWxlVG9waWNNYXBwaW5nOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICdCSU9URUNOT0xPR0lBICBOwrAwMy50eHQnOiAnQmlvdGVjbm9sb2fDrWEnLFxyXG4gICdDQU1QT1MgIERFIEFQTElDQUNJw5NOICBERUwgTcOJVE9ETyBDSUVOVMONRklDTy50eHQnOiAnQ2FtcG9zIGRlIEFwbGljYWNpw7NuIGRlbCBNw6l0b2RvIENpZW50w61maWNvJyxcclxuICAnRUwgQ09OT0NJTUlFTlRPIENJRU5USUZJQ08gWSBFTVBJUklDTyBOwrAwNC50eHQnOiAnRWwgQ29ub2NpbWllbnRvIENpZW50w61maWNvIHkgRW1ww61yaWNvJyxcclxuICAnRUwgTcOJVE9ETyBDSUVOVMONRklDTy0gTEEgUEVOSUNJTElOQS50eHQnOiAnRWwgTcOpdG9kbyBDaWVudMOtZmljbyAtIExhIFBlbmljaWxpbmEnLFxyXG4gICdMQSBDSUVOQ0lBIE3Dk0RVTE8gIE7CsCAwMS50eHQnOiAnTGEgQ2llbmNpYScsXHJcbiAgJ01BVEVSSUFMRVMgREUgTEFCT1JBVE9SSU8gUFJJTUVSIEHDkU8udHh0JzogJ01hdGVyaWFsZXMgZGUgTGFib3JhdG9yaW8nLFxyXG4gICdNRVRPRE8gQ0lFTlRJRklDTyAgIDHCsC50eHQnOiAnTcOpdG9kbyBDaWVudMOtZmljbycsXHJcbiAgJ1BFUlNPTkFKRVMgREUgQ0lFTkNJQSAgIE7CsDAyLnR4dCc6ICdQZXJzb25hamVzIGRlIENpZW5jaWEnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWF0ZXJpYWxGaWxlcygpOiBNYXRlcmlhbEZpbGVbXSB7XHJcbiAgY29uc3QgbWF0ZXJpYWxzUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdjdGEtbWF0ZXJpYWxzJylcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIFZlcmlmaWNhciBzaSBleGlzdGUgZWwgZGlyZWN0b3Jpb1xyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKG1hdGVyaWFsc1BhdGgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcmlvIGRlIG1hdGVyaWFsZXMgbm8gZW5jb250cmFkbzonLCBtYXRlcmlhbHNQYXRoKVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKG1hdGVyaWFsc1BhdGgpXHJcbiAgICBjb25zdCB0eHRGaWxlcyA9IGZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy50eHQnKSlcclxuICAgIFxyXG4gICAgY29uc3QgbWF0ZXJpYWxzOiBNYXRlcmlhbEZpbGVbXSA9IHR4dEZpbGVzLm1hcCgoZmlsZW5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKG1hdGVyaWFsc1BhdGgsIGZpbGVuYW1lKVxyXG4gICAgICBjb25zdCBoYXNDb250ZW50ID0gZnMuZXhpc3RzU3luYyhmaWxlUGF0aClcclxuICAgICAgXHJcbiAgICAgIC8vIE9idGVuZXIgZWwgdGVtYSBiYXNhZG8gZW4gZWwgbm9tYnJlIGRlbCBhcmNoaXZvXHJcbiAgICAgIGNvbnN0IHRvcGljID0gZmlsZVRvcGljTWFwcGluZ1tmaWxlbmFtZV0gfHwgJ1RlbWEgR2VuZXJhbCdcclxuICAgICAgXHJcbiAgICAgIC8vIEdlbmVyYXIgdMOtdHVsbyBsaW1waW9cclxuICAgICAgY29uc3QgdGl0bGUgPSBmaWxlbmFtZVxyXG4gICAgICAgIC5yZXBsYWNlKCcudHh0JywgJycpXHJcbiAgICAgICAgLnJlcGxhY2UoL07CsFxcZCsvZywgJycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKVxyXG4gICAgICAgIC50cmltKClcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGBtYXRlcmlhbC0ke2luZGV4ICsgMX1gLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHRvcGljLFxyXG4gICAgICAgIGZpbGVuYW1lLFxyXG4gICAgICAgIHVwbG9hZERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxyXG4gICAgICAgIGhhc0NvbnRlbnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbWF0ZXJpYWxzXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgbWF0ZXJpYWwgZmlsZXM6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUb3BpY3MoKTogc3RyaW5nW10ge1xyXG4gIGNvbnN0IG1hdGVyaWFscyA9IGxvYWRNYXRlcmlhbEZpbGVzKClcclxuICByZXR1cm4gWy4uLm5ldyBTZXQobWF0ZXJpYWxzLm1hcChtID0+IG0udG9waWMpKV1cclxufVxyXG5cclxuLy8gRXN0YSBmdW5jacOzbiB5YSBubyBsZWUgZWwgY29udGVuaWRvIHBhcmEgYWhvcnJhciB0b2tlbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcGljRXhpc3RzKHRvcGljOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBjb25zdCBtYXRlcmlhbHMgPSBsb2FkTWF0ZXJpYWxGaWxlcygpXHJcbiAgcmV0dXJuIG1hdGVyaWFscy5zb21lKG0gPT4gbS50b3BpYyA9PT0gdG9waWMpXHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImZpbGVUb3BpY01hcHBpbmciLCJsb2FkTWF0ZXJpYWxGaWxlcyIsIm1hdGVyaWFsc1BhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4aXN0c1N5bmMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsInR4dEZpbGVzIiwiZmlsdGVyIiwiZmlsZSIsImVuZHNXaXRoIiwibWF0ZXJpYWxzIiwibWFwIiwiZmlsZW5hbWUiLCJpbmRleCIsImZpbGVQYXRoIiwiaGFzQ29udGVudCIsInRvcGljIiwidGl0bGUiLCJyZXBsYWNlIiwidHJpbSIsImlkIiwidXBsb2FkRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZXJyb3IiLCJnZXRBbGxUb3BpY3MiLCJTZXQiLCJtIiwiZ2V0VG9waWNFeGlzdHMiLCJzb21lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/material-loader.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fload-materials%2Froute&page=%2Fapi%2Fload-materials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fload-materials%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fload-materials%2Froute&page=%2Fapi%2Fload-materials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fload-materials%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mcaci_Documents_GitHub_collabora_microservicios_app_api_load_materials_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/load-materials/route.ts */ \"(rsc)/./app/api/load-materials/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/load-materials/route\",\n        pathname: \"/api/load-materials\",\n        filename: \"route\",\n        bundlePath: \"app/api/load-materials/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mcaci\\\\Documents\\\\GitHub\\\\collabora\\\\microservicios\\\\app\\\\api\\\\load-materials\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mcaci_Documents_GitHub_collabora_microservicios_app_api_load_materials_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2FkLW1hdGVyaWFscyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9hZC1tYXRlcmlhbHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2FkLW1hdGVyaWFscyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtY2FjaSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2NvbGxhYm9yYSU1Q21pY3Jvc2VydmljaW9zJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtY2FjaSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q2NvbGxhYm9yYSU1Q21pY3Jvc2VydmljaW9zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrRDtBQUMvSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbWNhY2lcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxjb2xsYWJvcmFcXFxcbWljcm9zZXJ2aWNpb3NcXFxcYXBwXFxcXGFwaVxcXFxsb2FkLW1hdGVyaWFsc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbG9hZC1tYXRlcmlhbHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9sb2FkLW1hdGVyaWFsc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9hZC1tYXRlcmlhbHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtY2FjaVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXGNvbGxhYm9yYVxcXFxtaWNyb3NlcnZpY2lvc1xcXFxhcHBcXFxcYXBpXFxcXGxvYWQtbWF0ZXJpYWxzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fload-materials%2Froute&page=%2Fapi%2Fload-materials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fload-materials%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fload-materials%2Froute&page=%2Fapi%2Fload-materials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fload-materials%2Froute.ts&appDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmcaci%5CDocuments%5CGitHub%5Ccollabora%5Cmicroservicios&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();