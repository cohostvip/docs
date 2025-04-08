# Cohost Event Tags Reference

Below is a categorized list of events Cohost pushes to `dataLayer`, prefixed with `ch_`.

## 🛒 Commerce

| Event             | Description                          | Example Payload                    |
|------------------|--------------------------------------|------------------------------------|
| `ch_add_to_cart` | When a user adds an item to cart     | `{ productId, quantity, price }`  |
| `ch_order_submitted` | When a user completes checkout  | `{ orderId, total, items }`       |

## 📋 Interaction

| Event               | Description                            | Example Payload                     |
|--------------------|----------------------------------------|-------------------------------------|
| `ch_view_item`     | When a user views a product/event page | `{ productId, title }`             |
| `ch_button_clicked`| Any key button click                    | `{ buttonId, location }`           |

## 🧭 Navigation

| Event             | Description                       | Example Payload                |
|------------------|-----------------------------------|--------------------------------|
| `ch_page_view`   | Fired on route change              | `{ path, title, referrer }`    |
| `ch_filter_applied` | When a filter is used          | `{ filterType, value }`        |

<!-- > See [events-reference.md](/docs/events-reference) for full payload shapes and examples. -->
