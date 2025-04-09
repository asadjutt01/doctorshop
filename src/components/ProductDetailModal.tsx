import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import ProducSlider from "@/components/ProductSlider";
import ProducDetailContent from "./ProducDetailContent";
import { RxCross1 } from "react-icons/rx";
import { getItem } from "@/utils/localStorage/localStorage";
import { useRouter } from "next/router";

interface ProductDetailModalProps {
  show: boolean;
  onClose: () => void;
  product: any; // Replace with a specific type for product if available
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  show,
  onClose,
  product,
}) => {
  const getPharma: any = getItem("user_type");
  // console.log("selectedProduct>>>>>>>>product>", product);
  const router = useRouter();
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);
  const handleClickPharma = () => {
    router.push("/register-pharma");
  };
  return (
    <Modal
      className="search-model"
      centered
      show={show}
      size="xl"
      onHide={onClose}
    >
      <div className="lg-container-modal">
        {/* Close Icon */}
        <button className="modal-close-icon" onClick={onClose}>
          <RxCross1 />
        </button>

        <div className="product-details">
          <div className="row">
            <div className="col-lg-6">
              <div className="slider">
                <ProducSlider showWarning={false} showshort={true} product={product} />
              </div>
            </div>
            <div className="col-lg-6">
              <ProducDetailContent
                showShort={false}
                showSocial={false}
                productname={'Portable Electric Aspirator'}
                warningMobile={false}
                product={product}
              />
            </div>
          </div>
        </div>

        {product?.pharmaceutical_product === "true" && (
          <div className="warning-msg">
            <h6>Restricted Access, Authorized Use Only</h6>
            <p>
              Please be advised that access to this product is restricted and
              available only to eligible individuals. At Doctor Shop, we are
              committed to ensuring the safety and proper use of our
              pharmaceuticals.
            </p>
            <button className="btn-cart" onClick={handleClickPharma}>
              Register For A Pharmaceutical Account
            </button>
          </div>
        )}

      </div>
    </Modal>
  );
};

export default ProductDetailModal;
