declare module 'mx-identifiers-utils' {
    export function generarCURP(nombres: string, paterno: string, materno: string, sexo: string, fechaNacimiento: Date, estadoEnumValue: string): string;
    export function isCURP(curp: string): boolean;
}