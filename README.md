#### usersテーブル
|Column|Type|Options|
|------|----|-------|
|firstname|string|null: false|
|firstname_kana|string|null: false|
|lastname|string|null: false|
|lastname_kana|string|null: false|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|birthday|string|null: false|
|prefectures|string|null: false|<!-- 住所部分 -->
|city|string|null: false|
|adress|string|null: false|
|building_name|string|null: true|
|phone_number|string|null: true|
|card_number|string|null: false|<!--カードデータ部分-->
|validated_data|string|null: false|
|security_code|string|null: false|
|total_profit|string||<!--ユーザー詳細-->
|point|string||
|nice_count|string||
|user_profile|string|null: true|
**Association**
has_many :porducts
has_many :nices
has_many :commnets
has_many :messages
has_many : buyer_userReview, class_name :”userReview”, foreign: :buyer_id
has_many : buyers, through : :buyer_user_review, source: :seller
has_many : seller_userReview, class_name:”userReview”,foreign_key: :seller_id
has_many : sellers through: :seller_userReviews, source: :buyer


#### productsテーブル
|Column|Type|Options|
|------|----|-------|
<!-- 商品関係 -->
|images|string|null: true|
|Item_name|text|null: false|
|description|string|null: false|
|category|string|null: false|
|itemCondition|integer|null: false|
|orderstatus|string|null: false|
|size|string|null: false|
|bland||string|null: false|
<!-- 配送について -->
|delivery_charge|string|null: false|
|delivery_methot|string|null: false|
|delivery_area|string|null: false|
|delivery_time|string|null: false|
<!-- 料金 -->
|price|integer|null: false|
**Association**
has_many :images
has_many :commnets
has_many :messages
has_many :nices
belongs_to :user
belongs_to :category
belongs_to :bland


#### commentsテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|text|string|null: false|
**Association**
belongs_to :product
belongs_to :user


#### imagesテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|integer|null: false, foreign_key: true|
|image|string|null: true|
**Association**
belongs_to :product

#### nicesテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|number|string|null: true|
**Association**
belongs_to :user
belongs_to :product

#### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|integer|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: false|
|text|string|null: false|
**Association**
belongs_to :user
belongs_to :product

#### user_reviewテーブル
|Column|Type|Options|
|------|----|-------|
|buyer_id|integer|null: false, foreign_key: true|
|seller_id|integer|null: false, foreign_key: true|
|tradeCondition|string|null: true|
|message|text|null: false|
**Association**
belongs_to :buyer, class_name: “User”
belongs_to :seller, class_name: “User”
#### categoryテーブル
|Column|Type|Options|
|------|----|-------|
|text|string||
|product_id|integer|null: false, foreign_key:true|

**Association**
has_many :products
#### blandテーブル
|Column|Type|Options|
|------|----|-------|
|text|string||
|product_id|integer|null: false, foreign_key:
**Association**
has_many :products