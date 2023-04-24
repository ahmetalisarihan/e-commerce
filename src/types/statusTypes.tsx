export interface IStatus {
    products: any;
    productsStatus: 'idle' | 'loading' | 'success' |'fail' ;
    productDetail: any;
    productDetailStatus: 'idle' | 'loading' | 'success' |'fail' ;
}