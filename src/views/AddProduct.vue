<script setup>
    import { reactive, ref } from 'vue';
    import axios from 'axios'

    const image = ref(null);
    const uploading = ref(false);
    const success = ref(false);
    const form = reactive({
        name: "",
        quantity: 0
    })

    const handleImage = () => {

    }

    const handleSubmit = async () => {

        if (image.value == null) {
            alert("Upload Image");
            return false
        }
        uploading.value = true;

        await axios.post('api/product/create', form).then((res) => {
            if (res.status == 200) {
                success.value = true;
            }

        }).catch(() => {
            uploading.value = false;

        })
    }
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-content">
            <label for="image">
                Upload an image of the product
            </label>
            <input @change="handleImage" type="file" name="image" id="image">
        </div>
        <div class="form-content">
            <label for="name">
                Product Name
            </label>
            <input type="text" name="name" id="name" v-model="form.name">
        </div>
        <div class="form-content">
            <label for="quantity">
                Product Quantity
            </label>
            <input type="number" name="quantity" id="quantity" v-model="form.quantity">
        </div>
        <div class="form-content">
            <button>Add Product</button>
        </div>
    </form>

</template>

<style lang="css" scoped></style>