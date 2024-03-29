import footer from './footer.module.css'

import imgCongThuong from '../assets/imgs/img-body/imgFooter/congthuongicon.png'
import imgDMCA from '../assets/imgs/img-body/imgFooter/dmca_protected_26_120.png'
import imgAppStore from '../assets/imgs/img-body/imgFooter/appStore.png'
import imgGooglePlay from '../assets/imgs/img-body/imgFooter/googlePlay.png'
import imgVisa from '../assets/imgs/img-body/imgFooter/visa.png'
import imgMasterCard from '../assets/imgs/img-body/imgFooter/masterCard.png'
import imgTiktok from '../assets/imgs/img-body/imgFooter/tiktok.png'
import imgYoutube from '../assets/imgs/img-body/imgFooter/youtube.png'

const Footer = ()=> {
    return(
        <div className={footer.footer}>
            <div className={footer.centerTheTitle}>
                <div className={footer.footerList}>
                    <ul className={footer.footerItem}>
                        <h3 className={footer.footerNameCT30Shine}>CÔNG TY CỔ PHẦN TMDV 30SHINE</h3>
                        <li>82 Trần Đại Nghĩa, P. Đồng Tâm, Q. Hai Bà Trưng, HN</li>
                        <li>Số giấy chứng nhận kinh doanh: 010.7467.693</li>
                        <li>Ngày cấp: 08/06/2016</li>
                        <li>Nơi cấp: Sở kế hoạch đầu tư TP Hà Nội</li>
                        <li>Chính sách bảo mật thông tin</li>
                        <li>Liên hệ quảng cáo 30Shine</li>
                        <li className={footer.notificationGovernment}>
                            <img className={footer.notificationGovernmentBCT} src={imgCongThuong}/>
                            <img className={footer.notificationGovernmentDMCA} src={imgDMCA}/>
                        </li>
                        <li>
                            <p>Chấp nhận thanh toán</p>
                            <div className={footer.footerPayment}>
                                <img className={footer.footerPaymentMasterCard} src={imgMasterCard}/>
                                <img className={footer.footerPaymentVisa} src={imgVisa}/>
                            </div>
                        </li>

                    </ul>
                    <ul className={footer.footerItem}>
                        <h3 className={footer.footerItemH3}>GIỜ PHỤC VỤ</h3>
                        <li>Thứ 2 đến thứ 6: 8h00 - 21h00</li>
                        <li>Thứ 7, chủ nhật: 7h30 - 21h00</li>
                    </ul>
                    <div className={footer.footerItem}>
                        <ul className={footer.getTheApp}>
                            <h3 className={footer.footerItemH3}>TẢI ỨNG DỤNG CỦA 30SHINE</h3>
                            <li>Trải nghiệm đặt lịch nhanh chóng và nhiều tiện ích khác với ứng dụng 30Shine.</li>
                            <li className={footer.getTheAppIcon}>
                                <img src={imgAppStore}/>
                                <img src={imgGooglePlay}/>
                            </li>
                        </ul>
                        <ul className={footer.community}>
                            <h3 className={footer.footerItemH3}>THAM GIA CỘNG ĐỒNG</h3>
                            <li>Cùng 2.5tr thành viên 30Shine</li>
                            <li className={footer.SocialNetwork}>
                                <img className={footer.SocialNetworkTiktok} src={imgTiktok} />
                                <img className={footer.SocialNetworkYoutube} src={imgYoutube} />
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={footer.Copyright}>
                    <div className={footer.Copyright30Shine}>Copyright 2015 30Shine, Inc. All Rights Reserved</div>
                    <div className={footer.Recruit}>
                        <p className={footer.backToComity}>Về 30Shine</p>
                        <p className={footer.RecruitDetail}>Tuyển dụng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer