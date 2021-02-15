class ResponseDto {
  constructor({ message, data } = {}) {
    this.message = message || "";
    this.data = data || {};
  }
}

module.exports = ResponseDto;
