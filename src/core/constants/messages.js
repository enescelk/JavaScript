export default class Messages {
    add(field) {
        return `${field} eklendi`;
    }
    update(field) {
        return `${field} güncellendi`;
    }
    delete(field) {
        return `${field} silindi`;
    }
    exists(field) {
        return `${field} zaten var`;
    }
    checkField(field) {
        return `${field} alanını kontrol ediniz`;
    }
}