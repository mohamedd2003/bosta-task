# نستخدم نسخة نود خفيفة
FROM node:18-alpine

# تحديد مكان العمل جوه الكونتينر
WORKDIR /app

# نسخ ملفات الـ package
COPY package*.json ./

# تثبيت المكتبات
RUN npm install

# نسخ باقي ملفات المشروع
COPY . .

# بناء المشروع (لو هو Next.js أو React)
RUN npm run build

# تشغيل السيرفر (غالباً بورت 3000)
EXPOSE 3000
CMD ["npm", "start"]