import { useNavigate } from "react-router-dom";
import { ReactComponent as Cancel } from "../../assets/images/icon/cancel.svg";
import "./menu.scss";

type MenuProps = {
    handleCloseMenu: () => void;
};

const Menu = (props: MenuProps) => {
    const navigate = useNavigate();
    const handleShowHomePage = () => {
        navigate("/home");
    };

    const handleReserveNow = () => {
        navigate("/reservation");
    };

    const handleShowMatchingStatus = () => {
        navigate("/matching-status");
    };

    const handleShowCourtList = () => {
        navigate("/court-list");
    };

    const handleSignIn = () => {
        navigate("/sign-in");
    };

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="sportsman-menu">
            <div className="sportsman-menu-cancel">
                <Cancel onClick={props.handleCloseMenu}/>
            </div>
            <div className="sportsman-menu-space-1"/>
            <button
                className="sportsman-menu-show-home-page"
                onClick={handleShowHomePage}
            >
                回首頁
            </button>
            <button
                className="sportsman-menu-reserve-now"
                onClick={handleReserveNow}
            >
                立即預約
            </button>
            <button
                className="sportsman-menu-matching-status"
                onClick={handleShowMatchingStatus}
            >
                我的配對
            </button>
            <button
                className="sportsman-menu-court-list"
                onClick={handleShowCourtList}
            >
                球場資訊
            </button>
            <button
                className="sportsman-menu-sign-in"
                onClick={handleSignIn}
            >
                報到
            </button>
            <button
                className="sportsman-menu-logout"
                onClick={handleLogout}
            >
                登出
            </button>
        </div>
    );
};

export default Menu;
