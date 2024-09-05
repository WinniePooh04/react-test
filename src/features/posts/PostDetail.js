import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dialogFlag } from "./postsSlice";
import { setDialogFlag } from "./postsSlice";

const PostDetail = () => {
  const dispatch = useDispatch();
  const openFlag = useSelector(dialogFlag);
  const handleClose = () => {
    dispatch(setDialogFlag(false));
  };
  return (
    <>
      <Dialog
        open={openFlag}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default PostDetail;
