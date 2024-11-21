const { mongoose } = require('mongoose');
const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type require"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      require: [true, "blood quanity is require"],
      validate: {
        validator: function(v) {
            return v && v.length <= 500;
        },
        message: 'quantity should be at least 50ML or at most 500ML.'
    } 
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    orgnisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "orgnisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
