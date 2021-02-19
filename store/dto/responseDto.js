class ResponseDto {
  constructor({ message, data, code } = {}) {
    this.Message = message || "";
    this.Data = data || {};
    this.Code = code || 0;
  }
}

module.exports = ResponseDto;
