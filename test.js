const marked = require("marked");
const { htmlToText } = require("html-to-text");

const sampletext = `# Ruris exta gurgite

## Nec illa raptore

Lorem markdownum mutare annum *enses stagnum* precantia visa mentior et, mox
vanum lacrimis at fronde ferunt. Hactenus stetit.

> Sed inmotus sorores, et rictus stabantque novis inritamina Hippotades aera,
> *iam* desilit Tempe intervenit ad tangi [occiduae
> veniam](http://metum.net/formaducitur). Erant et tamen est esse! Plumae Troes
> Hymenaeus media.

## Nec poscimur

Iam pars terras e dixit aeternum. Cum umero distant Phoebus cedere. Prole partem
femina corpus fatebor, mota urbs celasset. Fronte Atlas forsitan inquit,
ambiguum quam negare.`;

const htmlText = marked(sampletext);
const text = htmlToText(htmlText, { baseElement: "p" });
console.log(text);
