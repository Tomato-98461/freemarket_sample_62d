#### usersテーブル.
|Column|Type|Options|
|------|----|-------|
|firstname|string|null: false|
|firstname_kana|string|null: false|
|lastname|string|null: false|
|lastname_kana|string|null: false|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|birthday|data|null: false|
|total_profit|bigint|default: 0|<!--ユーザー詳細-->
|point|bigint|default: 0|
|user_profile|string|null: true|

### Association
- has_many :porducts
- has_many :nices
- has_many :commnets
- has_many :messages
- has_many :buyer_userReview, class_name:”user_review”, foreign_key: :buyer_id
- has_many :buyers, through: :buyer_userReview, source: :seller
- has_many :seller_userReview, class_name:”user_review”, foreign_key: :seller_id
- has_many :sellers, through: :seller_userReviews, source: :buyer
- has_one :card
- has_one :address

#### cardsテーブル
|Column|Type|Options|
|------|----|-------|
|card_number|string|null: false|<!--カードデータ部分-->
|validated_data|string|null: false|
|security_code|integer|null: false|

**Association**
- belong_to :user

#### addressテーブル
|Column|Type|Options|
|------|----|-------|
|prefecture_id|integer|null: false|<!-- 住所部分 -->
|city|string|null: false|
|address|string|null: false|
|user_id|integer|null: false|
|building_name|string|null: true|
|phone_number|string|null: true|

**Association**
- belong_to :user

#### productsテーブル
|Column|Type|Options|
|------|----|-------|
|item_name|string|null: false|<!-- 商品関係 -->
|description|text|null: false|
|item_condition|integer|null: false|
|trade_status|integer|null: false|
|size|integer|null: false|
|bland_id|integer|null: true|
|category_id|integer|null: false|<!-- 配送について -->
|delivery_charge|integer|null: false|
|delivery_method|integer|null: false|
|delivery_area|integer|null: false|
|delivery_time|integer|null: false|<!-- 料金 -->
|price|integer|null: false|
|user_id|integer|null: false, foreign_key: true|

**Association**
- has_many :images
- has_many :commnets
- has_many :messages
- has_many :nices
- belongs_to :user
- belongs_to :category
- belongs_to :bland
- has_one :trade

#### commentsテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|text|string|null: false|

**Association**
- belongs_to :product
- belongs_to :user

#### imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|product_id|integer|null: false, foreign_key: true|

**Association**
- belongs_to :product

#### nicesテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

**Association**
- belongs_to :user
- belongs_to :product

#### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|trade_detail|integer|null: false|
|product_id|integer|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: false|

**Association**
- belongs_to :user
- belongs_to :product

#### user_reviewテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|trade_review|string|null: true|
|buyer_id|integer|null: false, foreign_key: true|
|seller_id|integer|null: false, foreign_key: true|

**Association**
- belongs_to :buyer, class_name: “User”
- belongs_to :seller, class_name: “User”

#### categoryテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string|

**Association**
- has_many :products
- has_ancestry

#### blandテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

**Association**
- belongs_to :category
- has_many :products

#### tradeテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|product_id|integer|null: false, foreign_key: true|

**Association**
- belongs_to :product
- belong_to :user
