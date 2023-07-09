const { Router } = require("express");
const {
  getAll,
  createOne,
  removeOne,
  editOne,
  getOne,
  makePayment,
} = require("../controller/students");
const router = Router();

router.route("/").get(getAll).post(createOne);
router
  .route("/select/:studentId")
  .delete(removeOne)
  .patch(editOne)
  .get(getOne)
  .post(makePayment);

module.exports = router;
