﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('amiri_kh-normal.ttf', font);
this.addFont('amiri_kh-normal.ttf', 'amiri_kh', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])