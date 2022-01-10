function edit(ref, match, replacer){

const matcher = new RegExp(match, 'g');
const result = ref.textContent.replace(matcher,replacer);
ref.textContent = result;


    }

    edit ('el1', 'DOM', 'Document object model')
