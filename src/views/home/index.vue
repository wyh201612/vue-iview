<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
            <Input v-model="formItem.input" placeholder="Enter something..." />
        </FormItem>
        <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="DatePicker">
            <Row>
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker> - <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
            </Row>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</template>

<script>
    export default {
        name: 'index',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    textarea: ''
                }
            }
        },
        computed: {
        },
        watch: {
        },
        created() {
        },
        mounted() {
            
        },
        destroyed() {

        },
        methods: {
            
        }
    }

</script>

<style lang="scss" scoped>

</style>
