function pgpWidget(pubKeyId, signString) {
    var openpgp = require('openpgp');
    var pubKey = ...; // 貼り付け先のHTMLから取得する
    var pgpSignString = openpgp.message.readArmored(signString);
    var result = openpgp.Signature.verify(pgpSignString, pubKey);
    if (result) {
        document.write('success');
    } else {
        document.write('failed');
    }
};
