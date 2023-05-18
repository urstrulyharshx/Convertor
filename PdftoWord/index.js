const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
  await PDFNet.addResourceSearchPath('./');

  // check if the module is available
  if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
    return;
  }

  await PDFNet.Convert.fileToWord('./SRS.pdf', 'output.docx');
}

PDFNet.runWithCleanup(main, 'demo:1684383324962:7daafde10300000000cf91ac44c1f5dc546e07e7bd756fbbc1adc46c20');