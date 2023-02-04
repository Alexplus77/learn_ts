interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

// это тайпгард
function checkIsResponseSuccess(res) {

}

// функция, которая проверяет, принимает IResponseSuccess  или IResponseFailed
// и возвращает data.databaseId если данные нормальные или выбрасывает ошибку и проверку через тайпгард сделать на то получили ли мы success
function getIdFromData(): number {

}